import React from 'react';

export class FacebookBtn extends React.Component {
    render() {
        const { name } = this.props

        return (
            <a className='facebookBtn'>{name}</a>
        )
    }
}