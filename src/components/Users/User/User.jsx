import cl from './User.module.css';
import profileImg from '../../assets/img/profile-img.png';
import { NavLink } from 'react-router-dom';

const User = (props) => {
  const user = props.user;

  return (
    <div className={cl.user_wrapper_inner}>
      <div className={cl.user_profile} key={user.id}>
        <div className={cl.image_and_button}>
          <NavLink to={'/profile/' + user.id}>
            <div className={cl.img_profile}>
              <img src={user.photos.small !== null ? user.photos.small : profileImg} />
            </div>
          </NavLink>
          <div className={cl.button}>
            {user.followed ? (
              <button
                disabled={props.followingInProgress.some((id) => id === user.id)}
                onClick={() => {
                  props.toggleFollowingProgress(true, user.id);
                  props.unfollow(user.id);
                  props.toggleFollowingProgress(false, user.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={props.followingInProgress.some((id) => id === user.id)}
                onClick={() => {
                  props.follow(user.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
        </div>
        <div className={cl.user_info}>
          <div className={cl.user_name}>
            <div>{user.name}</div>
            <div>{user.status}</div>
          </div>
          <div className={cl.user_location}>
            <div>"user.location.country"</div>
            <div>"user.location.city"</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
