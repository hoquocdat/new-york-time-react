import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Button } from 'reactstrap';
import collectionActions from '../../redux/collection/actions';
import 'bootstrap/dist/css/bootstrap.css';
import Loading from "../../components/Loading/index";
import MasonryPostList from "../../components/Post/MasonryPostList";

const { getListByTopic } = collectionActions;

class Topic extends Component {

	componentWillMount() {
		const { topicSlug } = this.props.match.params;
		const topic = topicSlug.split('-').join(' ');
		this.props.getListByTopic(this.props.meta.pageNumber,topic);
	}

	render() {
		const { posts_topic, meta } = this.props;
		return(
			<div>
				<div>
					<h1 className="text-center pt-4 pb-4">{this.props.match.params.topicSlug}</h1>
				</div>
				<Row>
					<MasonryPostList posts={posts_topic}/>
				</Row>
				<Row>
					<Loading isLoading={meta.loading}/>
				</Row>
				{
					posts_topic.length > 0 ?
					<Row className="px-5">
						<Button className="mt-5 text-center m-auto" onClick={() => this.props.getListByTopic(meta.pageNumber+1, meta.topic)}>Load more</Button>
					</Row>
					: null
				}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	const { posts_topic, meta } = state.Collection.toJS();
	return {
		posts_topic, meta
	}
};

const mapDispathToProps = (dispatch) => {
	return {
		getListByTopic: (pageNumber, topic) => dispatch(getListByTopic(pageNumber, topic)),
	}
};


export default connect(mapStateToProps, mapDispathToProps)(Topic);