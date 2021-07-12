interface ConteudoProps {
    children?: any;
}

export default function Layout(props: ConteudoProps) {
    return (
        <div className={`
            flex flex-col mt-7
        `}>
            {props.children}
        </div>
    )
}