import { FC, useState } from 'react';


const FQA: FC = () => {
  const [isActive, setIsActive] = useState<number>();

  const handleActiveItem = (item: number) => isActive === item ? setIsActive(-1) : setIsActive(item)

  return(
    <div>
    
    </div>
  )
}

export default FQA
