import React from 'react';
import { FacebookCircle } from './FacebookCircle';
import { FacebookBtn } from './FacebookBtn';

export class FacebookPost extends React.Component {
    render() {
      const { avatarUrl, name, education, post, time } = this.props  

      return (
        <div className='facebookPost'>
            <img className='facebookImg' src={avatarUrl} alt="avatar" />
            <div className="facebookBody">
                <div className="facebookHeading">
                    <p className="facebookName">{name}</p>
                    <FacebookCircle />
                    <p className="facebookEducation">{education}</p>
                </div>
                <p className="facebookText">{post}</p>
                <div className="facebookFooter">
                    <FacebookBtn name='Like' />
                    <FacebookCircle />
                    <FacebookBtn name='Reply' />
                    <FacebookCircle />
                    <p className="facebookTime">{time}</p>
                </div>
            </div>
        </div>
      )
    }
}