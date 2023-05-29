import { FC } from "react";

type TitleProps = {
    pageName: String
}

const Title: FC<TitleProps> = ({pageName: pageName}) => {
    return <>
        <h1>This is the Title! We are on page {pageName}</h1>
    </>
}

export default Title