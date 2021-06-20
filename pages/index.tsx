import React, { Component } from "react";
import ClassNames from "classnames/bind";
import styles from "./index.module.scss";

const cx = ClassNames.bind(styles);

interface Props {}
export default class Index extends Component<Props> {
	render() {
		return <div className={cx("container")}>hi</div>;
	}
}
