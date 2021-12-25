import{withRouter} from 'react-router-dom'

function User(props)
{
  console.warn(props.match.params.id)
  return(
      <div>
          <h1>Hi this is User no. {props.match.params.id}</h1>
          <h3>this is {props.match.params.name}</h3>
      </div>
  )
} export default withRouter(User);