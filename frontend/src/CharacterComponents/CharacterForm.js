import React from 'react';


class CharacterForm extends React.Component {

    state = {
        name: '',
        job: '',
        jobs: []
    }

    componentDidMount(){
        fetch("http://localhost:3000/jobs")
        .then(res => res.json())
        .then(jobs => this.setState({
            jobs
        }))
    }

    handleInputChange = (e) => {
        this.setState({
        [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const newCharacter = {
            name: this.state.name,
            job_id: this.state.job
        }
        fetch('http://localhost:3000/characters',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
            'Auth-key': localStorage.getItem('auth_key')
        },
        body: JSON.stringify(newCharacter)
        }).then(res => res.json())
        .then(token => {
            document.getElementById(`${this.state.job}`).checked = false
            this.setState({
                name: '',
                job:''
            })
            
            this.props.handleSubmit(token)
        
        })
        // console.log(newCharacter)
    }

    render(){

        const renderJobInputs = (jobs) => {
            return(
                jobs.map(job =>
                <div>
                    <br></br>
                    <div className="jobs">
                        
                        <input type="radio" id={job.id} onChange={this.handleInputChange} name='job' value={job.id} />
                        <label htmlFor={job.id}>{job.name}</label>
                        
                    </div>
                </div>
                )
            )
        }

        return (
        <span className="form-Character">
            <h2> Create Character </h2>
            <form className="Character-form" onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.name} onChange={this.handleInputChange} name='name' placeholder="Character Name"  />
            
            {/* <input type="radio" value={this.state.job} onChange={this.handleInputChange} name='job' value="Knight" /> */}
            <div>
            {
                renderJobInputs(this.state.jobs)
            }
            </div>
            <br></br>
            <input id="submit" type="submit" value="Submit" />
            </form>
        </span>
        )
    }
}

export default CharacterForm;