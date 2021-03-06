import React from 'react';
import Skills from './Skills';



class Fill extends React.Component {
  constructor(props){
    super(props);
    this.changefile = this.changefile.bind(this);
  }
  changefile(e){
    const inputelement = document.querySelector("#img-selector");
    inputelement.click();
  }

  generateSelectTags = () => {
    let selectTags = [];

    for (var num = 0; num < this.props.skillsNumber; num++) {
      selectTags.push(<Skills
            skillsList={this.props.skillsList}
            handleSelectSkills={this.props.handleSelectSkills}
            handleNumberOfSelects={this.props.handleNumberOfSelects}
            skillsSelected={this.props.skillsSelected}
            dataSelectNumber={num}
            skillsNumber={this.props.skillsNumber}
        />);
      }
              return selectTags;
    }

  render() {

    return (
      <section className={`dropdown__second collapsible ${this.props.fill_colapsed}`}>
          <div className="border">
              <div onClick={this.props.clickFill}  className="dropdown__fill collapsible__label">
                  <div className="dropdown__fill--name">
                      <div className="">
                          <i className="far fa-keyboard dropdown__fill--nameIcon"></i>
                      </div>
                      <h2 className="dropdown__fill--nameText">Rellena</h2>
                  </div>

                  <span className="arrow">
                      <i className="fas fa-angle-down icon--arrow"></i>
                  </span>
              </div>

              <div className="fill_form--container collapsible__content">
                  <div id="fill__form--itemscontainer" className="fill__form--itemscontainer" action="index.html" method="post">
                      <div className="fill__form--labelinput">
                          <label className="fill__label--items" htmlFor="nombrecompleto">Nombre completo</label>
                          <input className="fill__input--items fill__input-name" type="text" id="nombrecompleto" name="name" placeholder="Ej: Dorcas Muthoni" data-info="element-name" onChange={(e) => this.props.changeStateProperty(e, 'name')} value={this.props.name}/>

                      </div>

                      <div className="fill__form--labelinput">
                          <label className="fill__label--items" htmlFor="puesto">Puesto</label>
                          <input className="fill__input--items fill__input-job" type="text" id="puesto" name="job" placeholder="Ej: Front-end Unicorn" data-info="element-job" onChange={(e) => this.props.changeStateProperty(e, 'job')} value={this.props.job}/>
                      </div>

                      <div className="fill__form--labelinput">
                          <label className="fill__label--items" htmlFor="imagenperfil">Imagen de perfil</label>
                          <div className="fill__input--buttonandminiimg">
                              <button onClick={this.changefile} type="button" className="fill__input--addimgbutton">Añadir imagen</button>
                              <input type="file" onChange={this.props.handleImage} ref={this.props.fileImageRef} name="photo" id="img-selector" className="fill__input-photo action__hiddenField"/>
                              <div className="fill__input--miniimg" style= {{backgroundImage: this.props.imageUrl}}>
                              </div>
                          </div>
                      </div>

                      <div className="fill__form--labelinput">
                          <label className="fill__label--items" htmlFor="email">Email</label>
                          <input className="fill__input--items fill__input-mail" type="email" id="email" name="email" placeholder="Ej: dorcas@ohana.com" data-donde="element-mail" onChange={(e) => this.props.changeStateProperty(e, 'email')} value={this.props.email}/>
                      </div>

                      <div className="fill__form--labelinput">
                          <label className="fill__label--items" htmlFor="tlf">Teléfono</label>
                          <input className="fill__input--items fill__input-phone" type="tel" id="tlf" name="phone" placeholder="Ej: 555 55 55 55" data-donde="element-phone" onChange={(e) => this.props.changeStateProperty(e, 'phone')} value={this.props.phone}/>
                      </div>

                      <div className="fill__form--labelinput">
                          <label className="fill__label--items" htmlFor="linkedin">Linkedin</label>
                          <input className="fill__input--items fill__input-linkedin" type="text" id="linkedin" name="linkedin" placeholder="Ej: dorcas.ohana"
                          data-donde="element-linkedin" onChange={(e) => this.props.changeStateProperty(e, 'linkedin')} value={this.props.linkedin}/>
                      </div>

                      <div className="fill__form--labelinput">
                          <label className="fill__label--items" htmlFor="github">Github</label>
                          <input className="fill__input--items fill__input-github" type="text" id="github" name="github" placeholder="Ej: dorcasohana" data-donde="element-github" onChange={(e) => this.props.changeStateProperty(e, 'github')} value={this.props.github}/>
                      </div>

                      <div className="fill__form--abilitieslabelinput">
                          <label className="fill__label--items" htmlFor="habilidades">Habilidades (máximo 3)</label>

                          { this.generateSelectTags() }

                      </div>

                  </div>
              </div>
          </div>
      </section>
    );
  }

}

export default Fill;
