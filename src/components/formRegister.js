import React, {Component} from "react";
import "./formRegister.scss"
import ModalOkReg from "./modalOkReg";

class FormRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            position_id: "",
            photo: "",
            formErrors: {name: "", email: "", phone: ""},
            fileErrors: "",
            nameValid: false,
            emailValid: false,
            phoneValid: false,
            positionValid: false,
            photoValid: false,
            formValid: false,
            nameImg: "Upload your photo",
            token: "",
            urlToken: "https://frontend-test-assignment-api.abz.agency/api/v1/token",
            isRegistration: false,
        }


        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleFileUpload = this.handleFileUpload.bind(this);
        this.handleSendForm = this.handleSendForm.bind(this);
        this.handleUserChecked = this.handleUserChecked.bind(this);
    }


    getToken() {
        fetch(this.state.urlToken)
            .then(r => r.json())
            .then(r => this.setState({token: r.token}))
            .catch(r => console.log("Ошибка", r))

    }

    handleSendForm = (event) => {
        event.preventDefault()

        let formData = new FormData();
        formData.append("name", this.state.name);
        formData.append("email", this.state.email);
        formData.append("phone", this.state.phone);
        formData.append("photo", this.state.photo);
        formData.append("position_id", this.state.position_id);
        let token = this.state.token;
        console.log("token", token)
        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users',
            {method: "POST", body: formData, headers: {'Token': token},})
            .then(r => r.json())
            .then(r => {
                    if (r.success) {
                        this.setState({isRegistration: true})
                        const modal = document.querySelector('.modal')
                        modal.addEventListener('click',
                            () => {
                                this.setState({isRegistration: false});
                                document.location.reload();
                            })
                    } else throw r
                }
            )
            .catch(r => console.log(r))

    }

    handleFileUpload = (e) => {
        let file = e.target.files[0];
        let errorFile = this.state.fileErrors;

        if (file.size > 5242880) errorFile = "file too large";
        this.setState({
            nameImg: file.name,
            photo: file,
            fileErrors: errorFile,
        })
    }


    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const target = e.target
        this.setState({[name]: value},
            () => {
                this.validateField(name, target, value)
            });
    }
    handleUserChecked = (e) => {
        const id = e.target.id;
        this.setState({position_id: id})
    }

    validateField(fieldName, target, value) {
        let fieldValidationErrors = this.state.formErrors;
        let nameValid = this.state.nameValid;
        let emailValid = this.state.emailValid;
        let phoneValid = this.state.phoneValid;
        if (target.validity.valid) fieldValidationErrors.name = "";
        switch (target.name) {
            case "name":
                checkInput(target) ? nameValid = true : nameValid = false;
                break;
            case "email":
                checkInput(target) ? emailValid = true : emailValid = false;
                break;
            case "phone":
                checkInput(target) ? phoneValid = true : phoneValid = false;
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            nameValid: nameValid,
            phoneValid: phoneValid
        }, this.validateForm);

        function checkInput(tarInp) {
            if (tarInp.validity.tooShort) fieldValidationErrors[tarInp.name] = "too short"
            else if (tarInp.validity.tooLong) fieldValidationErrors[tarInp.name] = "too long"
            else if (tarInp.validity.patternMismatch) fieldValidationErrors[tarInp.name] = "bad input"
            else {
                fieldValidationErrors[tarInp.name] = "";
                target.setCustomValidity("");
                return true
            }
        }
    }

    validateForm() {
        this.setState({
            formValid: this.state.nameValid &&
                this.state.emailValid &&
                this.state.phoneValid
        })
    }

    componentDidMount() {
        this.getToken()
    }

    render() {

        return (
            <>

                <form>
                    <div className={"frameReg"}>

                        <ModalOkReg hide={this.state.isRegistration}/>

                        <div className={"titleForm"} id={"SignUp"}>
                            <h1>Working with POST request</h1>
                        </div>

                        < div className={"bodyForm"}>
                            <div className={"textField textFieldFloat2"}>
                                <input type={"text"}
                                       className={"inputStyle"}
                                       name={"name"}
                                       formNoValidate
                                       placeholder={"Your name"}
                                       value={this.state.name}
                                       pattern={"^[a-z]+$"}
                                       minLength={2}
                                       maxLength={6}
                                       onChange={this.handleUserInput}
                                       onBlur={this.handleUserInput}
                                       required
                                />
                                <label className={"textFieldLabel"} htmlFor={"text"}>Your name</label>
                                <div className={"errorText"}>{this.state.formErrors.name}</div>
                            </div>
                            <div className={"textField textFieldFloat2"}>
                                <input type={"email"}
                                       className={"inputStyle"}
                                       name={"email"}
                                       placeholder={"Email"}
                                       value={this.state.email}
                                       formNoValidate
                                       minLength={2}
                                       maxLength={100}
                                       pattern={'^(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"' +
                                       '(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")' +
                                       '@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\' +
                                       '[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:' +
                                       '[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])$)'}
                                       onChange={this.handleUserInput}
                                       onBlur={this.handleUserInput}
                                       required
                                />
                                <label className={"textFieldLabel"} htmlFor={"email"}>Email</label>
                                <div className={"errorText"}>{this.state.formErrors.email}</div>
                            </div>
                            <div className={"textField textFieldFloat2"}
                                 style={{marginBottom: "43px"}}>
                                <input type={"tel"}
                                       className={"inputStyle"}
                                       name={"phone"}
                                       formNoValidate
                                       placeholder={"Phone"}
                                       value={this.state.phone}
                                       pattern={"^\\+380([0-9]+)$"}
                                    /*minLength={13}*/
                                       maxLength={13}
                                       onChange={this.handleUserInput}
                                       onBlur={this.handleUserInput}
                                       required
                                />
                                <label className={"textFieldLabel"} htmlFor={"phone"}>Phone</label>
                                <div className={"errorText"}>{this.state.formErrors.phone}</div>
                            </div>

                            <div className={"checkGroup"}>
                                <div className={"titleCheckbox"}>
                                    <div className={"p1"}>Select your position</div>
                                </div>
                                <div className={"checkElement"}>
                                    <input type={"radio"} id={"1"} name={"checkPosition"}
                                           onChange={this.handleUserChecked}/>
                                    <label htmlFor={"Frontend developer"} className={"labelCheckbox"}>
                                        <span>Lawyer</span>
                                    </label>
                                </div>
                                <div className={"checkElement"}>
                                    <input type={"radio"} id={"2"} name={"checkPosition"}
                                           onChange={this.handleUserChecked}/>
                                    <label htmlFor={"Backend developer"} className={"labelCheckbox"}>
                                        <span>Content manager</span>
                                    </label>
                                </div>
                                <div className={"checkElement"}>
                                    <input type={"radio"} id={"3"} name={"checkPosition"}
                                           onChange={this.handleUserChecked}/>
                                    <label htmlFor={"Designer"} className={"labelCheckbox"}>
                                        <span>Security</span>
                                    </label>
                                </div>
                                <div className={"checkElement"}>
                                    <input type={"radio"} id={"4"} name={"checkPosition"}
                                           onChange={this.handleUserChecked}/>
                                    <label htmlFor={"QA"} className={"labelCheckbox"}>
                                        <span>Designer</span>
                                    </label>
                                </div>
                            </div>

                            <div style={{marginTop: "47px"}}>
                                <input
                                    className={"inputPhoto"}
                                    type={"file"}
                                    id={"inputPhoto"}
                                    onChange={this.handleFileUpload}
                                    accept={".jpg, .jpeg"}
                                />
                                <label className={"inputLabel"} htmlFor={"inputPhoto"}>
                                    <div className={"inputLabelButton"}>
                                        <div className={"p1"}>Upload</div>
                                    </div>
                                    <div className={"inputLabelText"}>
                                        <div className={"p1"} style={{paddingLeft: "14px"}}>{this.state.nameImg}</div>
                                    </div>
                                </label>
                                <div className={"errorText"}>{this.state.fileErrors}</div>
                            </div>

                        </div>

                        <button className={"buttonForm"}
                                type={"submit"}
                                disabled={!this.state.formValid}
                                onClick={this.handleSendForm}>
                            <div>Sign up</div>
                        </button>

                    </div>

                </form>
            </>

        )
    }
}

export default FormRegister;