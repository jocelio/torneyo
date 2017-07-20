import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createEquipe } from './actions/equipe_action';
import { reduxForm, Field } from 'redux-form';
import Anchor from '../../components/Anchor';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { renderField, required } from '../../components/FieldHelper';
import Cropper from 'react-crop';

class EquipeNew extends Component {

    constructor(props) {
        super(props);
        this.state = {showMessageDialog: false, message:'',image: null,
            previewImage: null};
    }

    formSubmit(equipe){
        this.refs.crop.cropImage().then((img) => {

            Object.assign(equipe, {image:img})

            this.props.createEquipe(equipe)
                .then(() => {
                    this.setState({showMessageDialog: true, message:`${equipe.name} created with success.`});
                    this.props.reset();
                    // this.context.router.push('/equipe');
                }).catch((e) => {
                    alert(e)
                });
        });
    }

    onChange(evt) {
        this.setState({
            image: evt.target.files[0]
        })
    }

    crop() {
        let image = this.refs.crop.cropImage()

        image.then((img)=> {
            this.setState({
                previewUrl: (window.URL || window.webkitURL).createObjectURL(img)
            })
        })
    }

    clear() {
        this.refs.file.value = null
        this.setState({previewUrl: null,image: null})
    }

    imageLoaded(img) {
        // if (img.naturalWidth && img.naturalWidth < 262 &&
        //     img.naturalHeight && img.naturalHeight < 147) {
        //     this.crop()
        // }
    }

    render(){

        const { handleSubmit } = this.props;

        return (
            <div>
            <form onSubmit={handleSubmit((props) => this.formSubmit(props))}>


                        <div className="mdl-card mdl-shadow--2dp large ">
                            <div className="mdl-card__title">
                                <h2 className="mdl-card__title-text">{this.props.title}</h2>
                            </div>
                            <div className="mdl-card__supporting-text">


                                <div className="content-grid mdl-grid" style={{"height":"300px","padding":"0px"}}>
                                    <div className="mdl-cell mdl-cell--4-col" style={{"margin":"0px"}}>

                                        <input ref='file' id="file" type='file' onChange={(e) => this.onChange(e)}/>

                                        {this.state.image &&

                                            <div  style={{height: 400, width: '30%'}}>
                                                <Cropper
                                                    height={250}
                                                    width={250}
                                                    ref='crop'
                                                    image={this.state.image}
                                                    onImageLoaded={() => this.imageLoaded()}/>

                                            </div>

                                        }

                                    </div>
                                    {this.state.image &&
                                        <div className="mdl-cell mdl-cell--3-col " style={{"paddingTop":"120px"}}>

                                            <button type="button" onClick={() => this.crop()}
                                                    className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">Crop</button>
                                            &nbsp;

                                            <button type="button" onClick={() => this.clear()}
                                                    className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">Clear</button>
                                        </div>
                                    }
                                    <div className="mdl-cell mdl-cell--4-col" style={{"margin":"2px"}}>
                                        {this.state.previewUrl &&
                                            <div>
                                                <span>Equipe Image</span>
                                                <img src={this.state.previewUrl} />
                                            </div>
                                        }
                                    </div>
                                </div>


                            </div>
                            <div className="mdl-card__actions mdl-card--border">
                                <Field name="name" type="text"
                                       component={renderField} validate={[required]} label="Equipe Name"/>

                                <Field name="description" type="text"
                                       component={renderField} validate={[required]} label="Equipe Description"/>
                            </div>
                            <div className="mdl-card__actions mdl-card--border">
                                <input type="submit" value="Save" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"/>
                                <Anchor name="Cancel" href="equipe" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"/>
                            </div>
                        </div>



            </form>
                <Dialog
                    title="Message"
                    actions={<FlatButton
                        label="Close"
                        primary={true}
                        keyboardFocused={false}
                        onClick={() => this.setState({showMessageDialog: false})}
                    />}
                    modal={false}
                    open={this.state.showMessageDialog}
                    onRequestClose={() => this.setState({showMessageDialog: false})}>
                    {this.state.message}
                </Dialog>
            </div>
        )
    }

    componentDidMount(){
        try{
            componentHandler.upgradeAllRegistered();
        }catch (e){}
    }
}

EquipeNew = reduxForm({
    form:'NewEquipeForm',
})(EquipeNew);

function mapStateToProps({ equipesState }){
    return { equipesState };
}

export default connect(mapStateToProps, { createEquipe })(EquipeNew);
