import React, { Component } from "react";
import css from './Statistics.module.css'
class Statistics extends Component{
    state = {
        
    }

    render() {
        return (<>
            
            <ul className={css.statList}>
                <li className={css.statItem}>
                  <p className={css.statItemName}>Good:
                    <span> {this.props.good}</span>
                  </p>
                </li>
                <li className={css.statItem}>
                  <p className={css.statItemName}>Neutral:
                    <span> {this.props.neutral}</span>
                  </p>
                </li>
                <li className={css.statItem}>
                  <p className={css.statItemName}>Bad:
                    <span>{this.props.bad} </span>
                  </p>
                </li>
                <li className={css.statItem}>
                      <p className={css.statItemName}>Total:
                        <span> {this.props.total}</span>
                      </p>
                </li>
                <li className={css.statItem}>
                      <p className={css.statItemName}>Positive feedback:
                        <span> {this.props.positivePercentage}</span> %
                      </p>
                </li>
          </ul>
        </>
            
        )
    }
}

export default Statistics