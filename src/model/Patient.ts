
export class Patient{
    public id:number;
    public name:string;
    public nic:string;
    public address:string;
    public bloodGroup:string;
    public category:string;
    public gender:string;
    public contact:string;
    public note:string;
    public age:string;
    public allergies:string;

    constructor(id:number,name:string,nic:string,address:string,bloodGroup:string,category:string,gender:string,contact:string,note:string,age:string,allergies:string){
        this.id=id;
        this.name=name;
        this.nic=nic;
        this.address=address;
        this.bloodGroup=bloodGroup;
        this.category=category;
        this.gender=gender;
        this.contact=contact;
        this.note=note;
        this.age=age;
        this.allergies=allergies;
    }
    getId():number{
      return this.id;
    }
    getName():string{
        return this.name;
    }
    getNic():string{
        return this.nic;
    }
   public getAddress():string{
        return this.address;
    }
}


// {
//     "name":true,
//     "age":true,
//     "address":false
// }