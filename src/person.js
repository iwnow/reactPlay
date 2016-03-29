class Person {
    constructor(name) {
        this.name = name;
    }
    
    info() {
        return `name ${this.name}`;
    }
    
    static range(n) {
        if (n < 0)
            return null;
        let res = [];
        while (n--) {
            res.push(new Person(`person ${n}`));
        }
        return res;
    }
    
    static rangeIter(n) {
        function* gen(n) {
            if (n < 0)
                    return null;
            while (n--) {
                yield new Person(`person ${n}`);
            }
        };
        
        return gen(n);
    }
}
    
    

module.exports = Person;