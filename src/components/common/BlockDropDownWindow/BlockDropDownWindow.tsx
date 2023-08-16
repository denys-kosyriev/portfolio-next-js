import { FC } from 'react';


// libs
import cn from "classnames";

// assets
import styles from "./BlockDropDownWindow.module.scss";

export const BlockDropDownWindow: FC = ({
                                          titleButton,
                                          componentClass,
                                          activeButton,
                                          setActiveButton,
                                          showWindow,
                                          setShowWindow,
                                          delayShowWindowF,
                                          children
                                        }) => {
  return (
    <div
      className={cn(styles.blockDropDownWindow, styles[componentClass])}
    >
      <button
        className={cn('p-relative', styles.buttonOpenWindow, activeButton ? styles.activeButton : undefined)}
        onClick={() =>
          delayShowWindowF(
            activeButton,
            setActiveButton,
            setShowWindow,
          )
        }
      >
        {titleButton}
        <svg className={cn(styles.close, activeButton ? styles.activeClose : undefined)} width="25" height="24"
             viewBox="0 0 25 24"
             fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.45888 24L6.04688 22.588L15.9279 12.707C16.1153 12.5195 16.2207 12.2652 16.2207 12C16.2207 11.7349 16.1153 11.4806 15.9279 11.293L6.06388 1.43103L7.47788 0.0170288L17.3399 9.87903C17.9023 10.4416 18.2182 11.2045 18.2182 12C18.2182 12.7955 17.9023 13.5584 17.3399 14.121L7.45888 24Z"
            fill="#03BF6A"></path>
        </svg>
        <svg className={cn(styles.close, activeButton ? styles.activeClose : undefined)} width="25" height="24"
             viewBox="0 0 25 24"
             fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.45888 24L6.04688 22.588L15.9279 12.707C16.1153 12.5195 16.2207 12.2652 16.2207 12C16.2207 11.7349 16.1153 11.4806 15.9279 11.293L6.06388 1.43103L7.47788 0.0170288L17.3399 9.87903C17.9023 10.4416 18.2182 11.2045 18.2182 12C18.2182 12.7955 17.9023 13.5584 17.3399 14.121L7.45888 24Z"
            fill="#03BF6A"></path>
        </svg>
      </button>
      <div className={cn(styles.dropDownWindow, showWindow ? styles.showWindow : undefined)}>
        {children}
      </div>
    </div>
  )
}