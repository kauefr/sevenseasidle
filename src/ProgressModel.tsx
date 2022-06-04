export type ProgressModel = {
    current: number;
    target: number;
}

export function ProgressView(props: {model: ProgressModel}): JSX.Element {
    return <progress max={props.model.target} value={props.model.current}></progress>;
}