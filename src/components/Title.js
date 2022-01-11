import { Fragment } from 'react';

const Title = ({title, subTitle, p}) => {
    return(
        <Fragment>
        <h1 className="header-title">{title}
            <br />{subTitle}
        </h1>
        {p && <p>{p}</p>}
        </Fragment>
    )
}

export default Title;