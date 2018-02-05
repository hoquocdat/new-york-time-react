import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Button } from 'reactstrap';
import collectionActions from '../../redux/collection/actions';
import 'bootstrap/dist/css/bootstrap.css';
import Loading from "../../components/Loading/index";
import MasonryPostList from "../../components/Post/MasonryPostList";

const { getLatestList } = collectionActions;

class Home extends Component {

	componentWillMount() {
		this.props.getLatestList(0);
	}

	render() {
		const { posts, meta } = this.props;
		return(
			<div>
				<div>
					<h1 className="text-center pt-4 pb-4">Latest News</h1>
				</div>
				<Row>
					<MasonryPostList posts={posts}/>
				</Row>
				<Row>
					<Loading isLoading={meta.loading}/>
				</Row>
				<Row className="px-5">
					<Button className="mt-5 text-center m-auto" onClick={() => this.props.getLatestList(meta.pageNumber+1)}>Load more</Button>
				</Row>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	const { posts, meta } = state.Collection.toJS();
	return {
		posts, meta
	}
};

const mapDispathToProps = (dispatch) => {
	return {
		getLatestList: (pageNumber) => dispatch(getLatestList(pageNumber)),
	}
};


export default connect(mapStateToProps, mapDispathToProps)(Home);