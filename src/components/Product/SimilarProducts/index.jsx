import React from "react";
import {isMobile} from "react-device-detect";
import {ProductCardWrapper} from "src/shared/components/ProductCardWrapper";
import css from "./styles.module.scss";
import {MobileSlideCardsView} from "../../../shared/components/MobileSlideCardsView";


export const SimilarProducts = ({products}) => {

    return (
        <div className={css.root}>
            <div className={css.title}>
                Похожие товары
            </div>
            {
                isMobile
                    ? (<MobileSlideCardsView className={""}
                                             products={products}
                                             CardElement={ProductCardWrapper}
                                             chunkSize={5}
                        />
                    )
                    : (
                        <div className={css.cardContainer}>
                            {
                                products.map((x, i) => <ProductCardWrapper key={i} product={x.product}/>)
                            }
                        </div>
                    )
            }
        </div>
    );
};