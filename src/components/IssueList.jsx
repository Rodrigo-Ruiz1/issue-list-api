import React from 'react';
import Issue from './Issue';

class IssueList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            issue: []
        }

    }

    componentDidMount() {
        this._fetchIssue();
    }

    _fetchIssue = async () => {
        const response = await fetch(
            'https://api.github.com/repos/facebook/create-react-app/issues'
        ).then(response => response.json());
        this.setState({
            issue: response
        })
        console.log('TESTING API: ', response[0].body)
    }

    render() {
            const {issue} = this.state;
            return (
                <>
                <h1>Facebook Issues</h1>
                {issue.map((issue, index) => (
                    <Issue 
                    key={index}
                    title={issue.title}
                    body={issue.body}
                    url={issue.url}
                    />
                ))}

                </>
            )
        
    }
}

export default IssueList;