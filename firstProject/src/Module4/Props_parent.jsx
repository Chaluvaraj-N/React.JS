// import React from 'react'
// import Props_child from './props_child'
// const props_parent = () => {
//     const name = "chalu";
//     const age = 22;
//   return (
//     <div>
//       <Props_child name={name} age={age} />
//     </div>
//   )
// }

// export default props_parent


import React from 'react'
import Props_child from './props_child'
function props_parent() {
    let name = "chalu";
    let experience = 2;
  return (
    <div>
      <>
      <Props_child name="sachin" age="27" company="tcs" exp={experience}/>
      <Props_child name="sachin" age="27" city="pune" company="tcs" exp={experience}/>
      <Props_child name="raj" age="28" company="infosys" exp={experience}/>
      <Props_child name="priya" age="26" city="belle" company="tcs" exp={experience}/>
      
      </>
    </div>
  )
}

export default props_parent
