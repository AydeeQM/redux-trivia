import store from "./store";
     
export const options = (options) => {
    return Object.keys(options).map((key, index) => {
        let value = options[key];
        let letters= ["A","B","C"];
        return (
        <div className= 'col-lg-4 col-xs-12 text-center' >
            <button className='btn btn-huge' type="button" name="button" key={index} onClick={(e) => this.controllers(e.currentTarget, value)}>
            <span className='letter'>{letters[index]}</span>{value}
            </button>
        </div>
        ); 
    }
    
    )
}

export const questionText = () => {
    return(
        <div>
        <div>
            <h1 className="text-center"> 
                {items[this.state.count].question} 
            </h1>
        </div>
        <div className="btn-cont answers">
        {this.options(items[this.state.count].options)} 
        </div>
        </div>
        )
}
export const answerText = (question) =>{
    return (
        <div>
        {!this.state.compare&&<h1 className="text-center">Tus respuestas son:</h1>}
        {this.state.compare&& <h1 className = "text-center"> Tienes  {this.state.score} respuestas correctas:</h1>}
        {this.state.answers.map((a, i) => {
            if (a == items[i].answer && this.state.compare) {
            return <p className="text-success">{i + 1}. {items[i].question}<strong>  {a}</strong></p>
            } else if (this.state.compare) {
            return <p className="text-danger">{i + 1}. {items[i].question}<strong>  <strike>{a}</strike> {items[i].answer}</strong></p>
            } else {
            return <p>{i + 1}. {items[i].question}  <strong>{a}</strong></p>;
            }
        })
        }
        <div className='text-center'>
            {!this.state.compare && <button className='btn-lg btnDark' onClick={() => this.compare()}>Submit</button>}
            {this.state.compare&& <button className ='btn-lg btnDark' onClick={() => this.init_again()}>Star Again </button>}
        </div>
        </div>
    );
}
export const init_again = () => {
    this.setState ({
        answers : [],
        count : 0,
        complete : false,
        compare:false,
        score: 0
    })
}
export const compare = () => {
    this.setState({
        compare: true
    })
}
export const controllers = (e,value) =>{
    let result = this.state.answers;
    result[this.state.count] = value;
    this.setState({
    answers: result
    })
    if (this.state.count === items.length - 1) {
        this.setState({
        complete: true
        });
    }   
        this.setState({
            count: this.state.count + 1
        })
    if (this.state.answers[this.state.count] == items[this.state.count].answer){
            this.setState({
                score : this.state.score + 1
            })
        }
}