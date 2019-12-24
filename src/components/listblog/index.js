/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../spinner';
// import useServices from '../../services/useServices';
import '../../utils/Libs';
import './style.css';

const ListBlog = props => {
	// console.log(datas);
	if (props.data === null) {
		return <Spinner />;
	}

	return (
		<div class='row articles'>
			{props.data.map((data, index) => (
				<div class='col-sm-6 col-md-4 item' key={`${index}`}>
					<Link
						to={{
							pathname: `/blogpost/${data.Titulo.cleanString()}`,
							state: data
						}}>
						<img class='img-fluid' src={data.portada} alt={data.Autor} />
					</Link>
					<h3 class='name'>{data.Autor}</h3>
					<p class='description'>{data.Titulo}</p>
					<Link  to={{
							pathname: `/blogpost/${data.Titulo.cleanString()}`,
							state: data
						}} class='action'>
						<i class='fa fa-arrow-circle-right'></i>
					</Link>
				</div>
			))}
		</div>
	);
};

export default ListBlog;
