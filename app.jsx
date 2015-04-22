var SubscribeUnit = React.createClass({
    getInitialState: function() {
        return {
			isSubmitted: false,
			showResults: false
		};
    },
    _handleClick: function() {
        this.setState({ showResults: true });
    },
	handleSubmit: function (isSubmitted) {
		this.setState({ isSubmitted: isSubmitted });
	},
    render: function() {
        return (
            <div className="subscribe-pg-one">
				<h3>Subscribe to our newsletters</h3>
                { !this.state.isSubmitted && <input onClick={ this._handleClick } onKeyUp={ this._handleClick }/>}
                { this.state.showResults ? <Options /> : null }
				<SubmitButton onSubmit={this.handleSubmit}/>
            </div>
        );
    }
});

var Options = React.createClass({
    render: function() {
        return (
            <div className="options">
                <ul className="collapse">
			        <li>
				        <input type="checkbox" />
				        <div><h3>GQ SHARP + SMART (Daily)</h3></div>
			        </li>
			        <li>
				        <input type="checkbox" />
				        <div><h3>YOUR WEEKLY GQ</h3></div>
			        </li>
			    </ul>
            </div>
        );
    }
});

var SubmitButton = React.createClass({
	getInitialState: function() {
		return { submitted: false };
	},
	_handleClick: function() {
		this.setState({
			submitted: true
		});
		this.props.onSubmit(true);
	},
    render: function() {
        return (
			<div>
			<button onClick={this._handleClick}>submit</button>
			{ this.state.submitted ? <Thanks /> : null }
			</div>
        )
    }
});

var Thanks = React.createClass({
    render: function() {
        return (
            <div>
              Thanks!
            </div>
        )
    }
});


React.render(<SubscribeUnit />, document.getElementById('sub-unit'));
