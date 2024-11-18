import { useEffect, useState } from "react"
import styles from "./CategoriesPage.module.css"
import { useRouter } from "next/router";
import Card from "../modules/Card";

function CategoriesPage({data}) {
    const router = useRouter();
    const [query , setQuery] = useState({difficulty: "" , time:""});

    const changeHandler = (e)=>{
        setQuery({...query , [e.target.name]: e.target.value})
    }

    const clickHandler = ()=>{
        router.push({
            pathname:"/categories",
            query
        })
    }

    useEffect(()=>{
        const {difficulty , time} =router.query;
        if(query.difficulty !== difficulty || query.time !== time){
            setQuery({difficulty , time})
        }
    } , [])
  return (
    <div className={styles.container}>
        <h2>Categories</h2>
        <div className={styles.subContainer}>
            <div className={styles.select}>
                <select value={query.difficulty} name="difficulty" onChange={changeHandler}>
                    <option value="">difficulty</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
                <select value={query.time} name="time" onChange={changeHandler}>
                    <option value="">Coocking Time</option>
                    <option value="more">More than 30 min</option>
                    <option value="less">less than 30 min</option>
                </select>
                <button onClick={clickHandler}>Search</button>
            </div>
            <div className={styles.cards}>
                {!data.length ? <img src="/images/search.png" alt="searchImage"/> : null}
                {data.map(food => <Card key={food.id} {...food}/>)}
            </div>
        </div>
    </div>
  )
}

export default CategoriesPage