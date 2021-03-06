import React from 'react';
import { ContactsType, ProfileType } from '../../../../types/profileTypes';
import ProfileSocials from '../ProfileSocials/ProfileSocials';

type ProfileDataProps = {
    profile: ProfileType
}

const ProfileData: React.FC<ProfileDataProps> = ({ profile, ...props }) => {
    return (
        <div className="profile_data profile-data">
            <div className="profile-data_item">
                <span className="profile-data_label">*Ищу работу:</span>
                <span>{profile.lookingForAJob ? "Да" : "Нет"}</span>
            </div>
            <div className="profile-data_item">
                <span className="profile-data_label">*My skills:</span>
                <span>{profile.lookingForAJobDescription}</span>
            </div>
            <div className="profile-data_item">
                <span className="profile-data_label">*Имя:</span>
                <span>{profile.fullName}</span>
            </div>
            <div className="profile-data_item">
                <span className="profile-data_label">*Обо мне:</span>
                <span>{profile.aboutMe}</span>
            </div>
            <div className="profile-data_item">
                <span className="profile-data_label">Контакты:</span>
                <ProfileSocials profile={profile} />
            </div>

            {Object.keys(profile.contacts).map(key => {
                return <SocialItem key={key} socialTitle={key}
                    socialLink={profile.contacts[key as keyof ContactsType]} />
            })}
        </div>
    );
};


type SocialItemProps = {
    socialTitle: string
    socialLink: string
}

const SocialItem: React.FC<SocialItemProps> = ({ socialTitle, socialLink }) => {

    return (
        <div className="profile-data_item">
            <a href={socialLink} className="profile-data_link" target="_blank" rel="noreferrer">{socialTitle}
            </a>
        </div>
    )
}

export default ProfileData;