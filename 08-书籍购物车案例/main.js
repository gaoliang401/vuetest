
const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: '书籍1',
                data: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '书籍2',
                data: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 3,
                name: '书籍3',
                data: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 4,
                name: '书籍4',
                data: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 5,
                name: '书籍5',
                data: '2006-9',
                price: 85.00,
                count: 1
            }
        ]
    },
    methods:{
        getFinalPrice(price){
            return '￥'+price.toFixed(2);
        },
        add(id){
            console.log(id);
            for(i=0;i<this.books.length;i++)
            {
                if(id==this.books[i].id)
                {
                    this.books[i].count+=1;
                }
            }
        },
        sub(id){
            console.log(id);
            for (i = 0; i < this.books.length; i++) {
                if (id == this.books[i].id) {
                    if (this.books[i].count == 0) { 
                      this.remove(id);
                    }
                    else{
                        this.books[i].count -= 1;
                    }
                }
            }
        },
        remove(id){
            for(i=0;i<this.books.length;i++)
            {
                if (id == this.books[i].id) {
                    this.books.splice(i, 1);
                }
            }
        }
    },
    filters:{
        showPrice(price){
            return '￥'+price.toFixed(2);
        }
    },
    computed:{
        totalPrice(){
            let all=0;
            //1
            // for(i=0;i<this.books.length;i++)
            // {
            //     all+=this.books[i].count*this.books[i].price;
            // }

            //2
            // for(let i in this.books)
            // {
            //     all+=this.books[i].count*this.books[i].price;
            // }

            //3
            // for(let item of this.books)
            // {
            //     all+=item.count*item.price;
            // }

            //4
            // all = this.books.reduce(function (pre, book) {
            //     return pre +book.price * book.count;
            // }, 0)

            all = this.books.reduce((pre, book) =>pre +book.price * book.count,0)

            console.log(all);
            return all;
        }
    }
}
)
