import React, { FC, useState } from "react";

// libs
import cn from "classnames";

// assets
import styles from "./Sidebar.module.scss";
import { dataProfile } from "@/utils/data-profile";

export const Sidebar: FC = () => {

  const [activeButtonsSkills, setActiveButtonsSkills] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

  const delayShowSkills = () => {
    if (!activeButtonsSkills) {
      setActiveButtonsSkills(true);
      setTimeout(() => {
        setShowSkills(true);
      }, 200)
    } else {
      setShowSkills(false);
      setTimeout(() => {
        setActiveButtonsSkills(false);
      }, 200)
    }
  }

  return (
    <aside className={cn(styles.sidebar, 'p-relative')}>
      <div className='container'>
        <div className={cn(styles.wrapper, 'p-relative')}>
          <div className={styles.profile}>
            <div className={styles.photo}>
              <img src={dataProfile.photo} alt='' />
            </div>
            <div className={styles.info}>
              <h2>{dataProfile.name}</h2>
              <h3>{dataProfile.profession}</h3>
              <div className={styles.location}>
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 14 14" role="img">
                  <path
                    d="M4.856 4.9c0 1.183.928 2.103 2.124 2.103 1.23 0 2.164-.907 2.162-2.102-.001-1.19-.93-2.096-2.154-2.098C5.79 2.801 4.856 3.72 4.856 4.9m2.14 9.1c-.09-.116-.17-.22-.25-.326-1.137-1.507-2.214-3.053-3.16-4.684-.517-.89-.996-1.802-1.328-2.779-.561-1.652-.181-3.133.9-4.453C3.998.737 5.123.181 6.449.032c2.35-.266 4.57 1.128 5.302 3.327.203.611.3 1.24.225 1.884-.06.51-.227.991-.418 1.465-.411 1.018-.947 1.973-1.52 2.91a49.947 49.947 0 01-2.96 4.284l-.08.097"></path>
                </svg>
                <p>{dataProfile.location}</p>
              </div>
            </div>
          </div>
          <div className={styles.skills}>
            <button
              className={cn('p-relative', 'button-window', activeButtonsSkills ? 'active-button' : undefined)}
              onClick={() => {
                delayShowSkills()
              }}
            >
              My Skills
              <svg className={cn('close', activeButtonsSkills ? 'active-close' : undefined)} width="25" height="24"
                   viewBox="0 0 25 24"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.45888 24L6.04688 22.588L15.9279 12.707C16.1153 12.5195 16.2207 12.2652 16.2207 12C16.2207 11.7349 16.1153 11.4806 15.9279 11.293L6.06388 1.43103L7.47788 0.0170288L17.3399 9.87903C17.9023 10.4416 18.2182 11.2045 18.2182 12C18.2182 12.7955 17.9023 13.5584 17.3399 14.121L7.45888 24Z"
                  fill="#03BF6A"></path>
              </svg>
              <svg className={cn('close', activeButtonsSkills ? 'active-close' : undefined)} width="25" height="24"
                   viewBox="0 0 25 24"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.45888 24L6.04688 22.588L15.9279 12.707C16.1153 12.5195 16.2207 12.2652 16.2207 12C16.2207 11.7349 16.1153 11.4806 15.9279 11.293L6.06388 1.43103L7.47788 0.0170288L17.3399 9.87903C17.9023 10.4416 18.2182 11.2045 18.2182 12C18.2182 12.7955 17.9023 13.5584 17.3399 14.121L7.45888 24Z"
                  fill="#03BF6A"></path>
              </svg>
            </button>
            <ul className={cn('drop-down-window', showSkills ? ['show-window', styles.skillsWindow] : undefined)}>
              {dataProfile.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  )
}