import { CSSProperties } from "react";
import { Cocktail } from "./layout";


interface Props {
    drink: Cocktail[]
}

function RecipeText(props: Props) {


    /*
        for (let i = 1; i < 16; i++) {
            const measurement = 'strMeasure' + [i];
            const ingredients = 'strIngredient' + [i];
    
        }
    */

    return (
        <div style={recipeContainer} >
            <h2 style={drinkName}>
                {props.drink[0]?.strDrink}
            </h2>
            
                <ul style={listStyle}>
                    <li>{props.drink[0]?.strMeasure1} {props.drink[0]?.strIngredient1}</li>
                    <li>{props.drink[0]?.strMeasure2} {props.drink[0]?.strIngredient2}</li>
                    <li>{props.drink[0]?.strMeasure3} {props.drink[0]?.strIngredient3}</li>
                    <li>{props.drink[0]?.strMeasure4} {props.drink[0]?.strIngredient4}</li>
                    <li>{props.drink[0]?.strMeasure5} {props.drink[0]?.strIngredient5}</li>
                    <li>{props.drink[0]?.strMeasure6} {props.drink[0]?.strIngredient6}</li>
                    <li>{props.drink[0]?.strMeasure7} {props.drink[0]?.strIngredient7}</li>
                    <li>{props.drink[0]?.strMeasure8} {props.drink[0]?.strIngredient8}</li>
                    <li>{props.drink[0]?.strMeasure9} {props.drink[0]?.strIngredient9}</li>
                    <li>{props.drink[0]?.strMeasure10} {props.drink[0]?.strIngredient10}</li>
                    <li>{props.drink[0]?.strMeasure11} {props.drink[0]?.strIngredient11}</li>
                    <li>{props.drink[0]?.strMeasure12} {props.drink[0]?.strIngredient12}</li>
                    <li>{props.drink[0]?.strMeasure13} {props.drink[0]?.strIngredient13}</li>
                    <li>{props.drink[0]?.strMeasure14} {props.drink[0]?.strIngredient14}</li>
                    <li>{props.drink[0]?.strMeasure15} {props.drink[0]?.strIngredient15}</li>
                </ul>

           


            <p>
                {props.drink[0]?.strInstructions}
            </p>
        </div>

    )
}

const recipeContainer: CSSProperties = {
    width: '40%',
    objectFit: 'cover',
    textAlign: 'justify',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center'
}

const drinkName: CSSProperties = {
    fontSize: 'xx-large'
}

const listStyle: CSSProperties = {
    listStyleType: 'none',
    fontSize: 'small'
}

export default RecipeText;