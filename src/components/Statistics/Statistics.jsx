import React, { Component } from "react";
import { addBackgroundColor } from "utils/addBackgroundColor";
import { StatisticsList, StatisticItemName, StatisticsItem } from "./Statistics.styled";
class Statistics extends Component{
    state = {
        
    }

    render() {
        return (
            <StatisticsList>
                <StatisticsItem>
                    <StatisticItemName>Good:
                       <span> {this.props.good}</span>
                    </StatisticItemName>
                </StatisticsItem>
                <StatisticsItem>
                    <StatisticItemName>Neutral:
                       <span> {this.props.neutral}</span>
                    </StatisticItemName>
                </StatisticsItem>
                <StatisticsItem>
                    <StatisticItemName>Bad:
                       <span>{this.props.bad} </span>
                    </StatisticItemName>
                </StatisticsItem>
                <StatisticsItem>
                    <StatisticItemName>Total:
                       <span> {this.props.total}</span>
                    </StatisticItemName>
                </StatisticsItem>
                <StatisticsItem>
                    <StatisticItemName style={{backgroundColor:addBackgroundColor(this.props.positivePercentage)}}>Positive feedback:
                        <span> {this.props.positivePercentage}</span> %
                    </StatisticItemName>
                </StatisticsItem>
            </StatisticsList>
        )
    }
}

export default Statistics