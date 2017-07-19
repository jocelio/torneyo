import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createEquipe } from './actions/equipe_action';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';
import Anchor from '../../components/Anchor';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { renderField, required } from '../../components/FieldHelper';
import Cropper from 'react-crop';
// import 'react-crop/css';

class EquipeNew extends Component {

    constructor(props) {
        super(props);
        this.state = {showMessageDialog: false, message:'',image: null,
            previewImage: null};
    }

    formSubmit(props){
        this.props.createEquipe(props)
            .then(() => {
                this.setState({showMessageDialog: true, message:`${props.name} created with success.`});
                this.props.reset();
                // this.context.router.push('/equipe');
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

        if (img.naturalWidth && img.naturalWidth < 262 &&
            img.naturalHeight && img.naturalHeight < 147) {
            this.crop()
        }
    }

    render(){

        const { handleSubmit } = this.props;

        return (
            <div>
            <form onSubmit={handleSubmit((props) => this.formSubmit(props))}>




                        <div className="mdl-card mdl-shadow--2dp large">
                            <div className="mdl-card__title">
                                <h2 className="mdl-card__title-text">{this.props.title}</h2>
                            </div>
                            <div className="mdl-card__supporting-text">

                                <div className="content-grid mdl-grid">

                                    <div className="mdl-cell mdl-cell--8-col">
                                        <div className="content-grid mdl-grid">
                                            <div className="mdl-cell mdl-cell--4-col">

                                                <input ref='file' id="file" type='file' onChange={(e) => this.onChange(e)}/>
                                                <label for="file" className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
                                                    <i className="material-icons">plus</i>
                                                </label>

                                                {this.state.image &&

                                                <div  style={{height: 400, width: '30%'}}>
                                                    <Cropper
                                                        height={250}
                                                        width={250}
                                                        ref='crop'
                                                        image={this.state.image}
                                                        onImageLoaded={() => this.imageLoaded()}
                                                    />

                                                    <hr/>

                                                    <button type="button" onClick={() => this.crop()}
                                                            className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">Crop</button>
                                                    &nbsp;
                                                    <button type="button" onClick={() => this.clear()}
                                                            className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">Clear</button>
                                                </div>

                                                }

                                            </div>
                                            <div className="mdl-cell mdl-cell--4-col">
                                            </div>
                                            <div className="mdl-cell mdl-cell--4-col">
                                                {this.state.previewUrl && <img src={this.state.previewUrl} />}
                                            </div>
                                        </div>


                                    </div>

                                <div className="mdl-cell mdl-cell--4-col">

                                    <Field name="name" type="text"
                                           component={renderField} validate={[required]} label="Equipe Name"/>

                                    <Field name="description" type="text"
                                           component={renderField} validate={[required]} label="Equipe Description"/>


                                </div>
                            </div>

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

EquipeNew.contextTypes = {
    router: PropTypes.object
};

EquipeNew = reduxForm({
    form:'NewEquipeForm',
})(EquipeNew);

function mapStateToProps({ equipesState }){
    return { equipesState };
}

export default connect(mapStateToProps, { createEquipe })(EquipeNew);
