import { ChangeEvent, Component } from "react";
import { Link } from "react-router-dom";

interface Props {
    onChange: (value: string) => void;
    delay?: number;
}
interface State {
    value: string;
}

class Startpage extends Component<Props, State> {
    timer?: NodeJS.Timeout;
    state: State = { value: '' }

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ value: event.target.value })
    }

    componentDidUpdate(_: Props, prevState: State) {
        //const { onChange } = this.props;
        //onChange(this.state.value)
        const { delay, onChange } = this.props;
        const { value } = this.state;

        if (value && prevState.value !== value) {
            if (delay) {
                if (this.timer) clearTimeout(this.timer);
                this.timer = setTimeout(() => {
                    onChange(this.state.value)
                }, delay);
            } else {
                onChange(this.state.value);
            }
        }
    }

    render() {
        return (
            <div>
                <input
                    placeholder="Search cocktail by name or ingredient"
                    onChange={this.handleChange}
                />
                <Link to="/searchResult">
                    <p>Här ska ett inputfält in</p>
                </Link>
            </div>
        );
    }
}

export default Startpage;