import CheckoutPage from "./components/CheckoutPage"
import ReviewPage from './components/ReviewPage'
import RetryPage from "./components/RetryPage"

export const routes = [
    {path : '/checkout/review', component : ReviewPage},
    {path : '/checkout', component : CheckoutPage},
    {path : '/checkout/retry', component : RetryPage},
    {path : '/', redirect : "/checkout"},
]