import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody, Badge } from 'reactstrap';
import { siteConfig } from '../../config';
import ModalPost from "./ModalPost";
import moment from 'moment';
import { minimalize } from "../../helpers/post";
import slugify from 'slugify';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class CardPost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false
		};
	}

	toggle = () => {
		this.setState({
			modal: !this.state.modal
		});
	};

	imageSource = (multimedia) => {
		const xlargeIndex = _.findIndex(multimedia, { subtype: 'xlarge' });
		let url = '';
		if ( xlargeIndex !== -1 ){
			url = `${siteConfig.imageRootPath}${multimedia[xlargeIndex].url}`
		}else{
			url = 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180';
		}
		return url;
	};

	renderLinkTopic = (sectionName) =>  {
		if(sectionName) {
			return (
				<Badge className="badge-pill topic">
					<Link to={`/topic/${slugify(sectionName)}`} replace>
						#{sectionName}
					</Link>
				</Badge>)
		}
	};
	render() {
		const { pub_date, multimedia, snippet, headline, section_name } = this.props;
		return (
				<Card className="mb-3">
					<CardImg onClick={this.toggle} top width="100%" src={this.imageSource(multimedia)} alt={headline.main} />
					<CardBody>
						<CardTitle onClick={this.toggle} >{headline.main}</CardTitle>
						{this.renderLinkTopic(section_name)}
						<p><small>{moment(pub_date).fromNow()}</small></p>
						<CardText>{minimalize(snippet,120)}</CardText>
						<ModalPost isOpen={this.state.modal} toggle={this.toggle} {...this.props} />
					</CardBody>
				</Card>
		)
	}

}

export default CardPost;