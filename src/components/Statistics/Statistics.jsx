import PropTypes from "prop-types";
import css from "./Statistic.module.css";

const colorOfBackground = () => "#" + Math.floor(Math.random() * 16777215).toString(16);

export const Statistics = ( { stats, title } ) => (
<section className= {css.statistic}> 
   <h2 className={css.title}>{title}</h2>

  <ul className= {css.statsList}>
    {stats.map ((stat => {
        return (
            <li className={css.item}
            style = {{backgroundColor: colorOfBackground()}}
            key= {stat.id}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        )
    }))}
    </ul>
    </section>
)

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf (
        PropTypes.shape ({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}