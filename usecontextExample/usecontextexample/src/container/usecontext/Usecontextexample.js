import React , {useContext} from 'react'
import { Appcontext } from '../../useContextexample'

function Usecontextexample() {
    const {data} = useContext(Appcontext)
  return (
    <div>
        <h2>usecontext</h2>
        <p>{data}</p>
    </div>
  )
}

export default Usecontextexample
