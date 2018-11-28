import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import ResumeImage from '../Images/Resume.jpg'
import Bounce from 'react-reveal/Bounce';


class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
            
            <section>
                <input className="button" type="button" value="Resume" onClick={() => this.openModal()} />
                <Modal 
                    visible={this.state.visible}
                    width="100%"
                    height="50%"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                        <div>
                            <a href="javascript:void(0);" onClick={() => this.closeModal()}>close</a>

                            <Bounce bottom>
                            <img src={ResumeImage} style={{ maxHeight: '70%', maxWidth: '100%'}} />
                            </Bounce>

                        </div>
                </Modal>
            </section>

        );
    }
}

export default Resume;