import React from 'react';
import { connect, MapStateToPropsParam } from 'react-redux';
import IUser from '../states/IUser';
import { createChangeUserNameAction } from '../actions/UserNameEvents';
import store, { IState } from '../Store';
import { TextBox } from './TextBox';

class UserForm extends React.Component<IUser, {}> {
    public render() {
        return (
            <div>
                <p>
                    <TextBox label="Username" type="text" value={this.props.name} 
                        onChangeText={this.onChangeText}></TextBox>
                </p>
                <p>Name: {this.props.name}</p>
            </div>
        );
    }

    private onChangeText = (value: string) => {
        store.dispatch(createChangeUserNameAction(value));
    }
}

const mapStateToProps = (state: IState) => {
    return state.User;
};

export default connect(mapStateToProps)(UserForm);
