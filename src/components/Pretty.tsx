import * as React from 'react';

interface Props {
    data: string;
  }

  function checkKeys (value: any) {
   return value.map((v,i) => {
      const t = typeof v
      if (t === 'string' || t === 'number') return <div key={i}>{v}</div>;
      else if (Array.isArray(v)) {
        return (
          <div key={i}>
                <div>  [</div>
                <div >  {checkKeys(v)}</div>
             <div>  ]</div>
          </div>

        )
      } else {
        return (
          <div key={i}>
             <div>  {'{'}</div>
                <div >  {checkObj(v)}</div>
              <div>  {'}'}</div>
          </div>
        )
      }

    })
  }


  function checkObj(value: object) {
    return Object.entries(value).map(([k,v],i)=> {
      if (typeof v === 'object') {
        return   (
          <div key={i}>
              <div>  {'{'}</div>
                <div>    {checkObj(v)}</div>
             <div>  {'}'}</div>
          </div>
        )
       } else return  (
       <div key={i}>  {k}:{v ?? ''}</div>);
    })
  }


function Pretty({data}:Props) {

  const s = JSON.parse(data)
  const r = checkKeys(s)

    return  <div className="container"> {r}</div>;
}





export default Pretty;
