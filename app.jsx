var HiddenInputs = React.createClass({
  render: function() {
    return (
      <div className="hidden-inputs">
        <input type="hidden" name="toolkit.application" value="newsletter" />
        <input type="hidden" name="toolkit.applicationId" value="" />
        <input type="hidden" name="formName" value="shortForm" />
        <input type="hidden" name="partnerCode" value="" />
        <input type="hidden" name="sourceCode" value="" />
      </div>


    );
  }
});

var SubscribeUnit = React.createClass({
    getInitialState: function() {
        return {
    			isSubmitted: false,
    			showResults: false
    		};
    },
    _handleClick: function(showResults) {
        this.setState({ showResults: showResults });
    },
	  _handleSubmit: function (isSubmitted) {
		    this.setState({ isSubmitted: isSubmitted });
	  },
    render: function() {
        return (
            <div className="subscribe-pg-one">
              <form name="newslettersForm" action="https://secure.gq.com/services/newsletters" method="post">
                { !this.state.isSubmitted && <h5>Subscribe to our newsletters</h5> }
                <fieldset>
                  { !this.state.isSubmitted && <HiddenInputs /> }
                </fieldset>


                { !this.state.isSubmitted && <input onClick={ this._handleClick } onKeyUp={ this._handleClick }/> }
                { !this.state.isSubmitted && this.state.showResults ? <Options /> : null }
                <SubmitButton onSubmit={this._handleSubmit}/>

              </form>
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
               <p>I understand and agree that registration on or use of this site constitutes agreement to it&#x00027;s user agreement & privacy policy.</p>

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
      { !this.state.submitted && <button onClick={this._handleClick}>submit</button> }

			{ this.state.submitted ? <Thanks /> : null }
			</div>
        )
    }
});

var Thanks = React.createClass({
    render: function() {
        return (
            <div className="subscribe-page-two">
              Thanks!
            </div>
        )
    }
});


React.render(<SubscribeUnit />, document.getElementById('newsletter-form'));
