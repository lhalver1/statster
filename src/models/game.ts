export class Game {
    id: string;
    double: string;
    triple: string;
    AB: string;
    BB: string;
    CS: string;
    date: string;
    H: string;
    HR: string;
    K: string;
    opponent: string;
    R: string;
    RBI: string;
    SB: string;
    userId: string;

    constructor() {
        this.id = '';
        this.double = '';
        this.triple = '';
        this.AB = '';
        this.BB = '';
        this.CS = '';
        this.date = '';
        this.H = '';
        this.HR = '';
        this.K = '';
        this.opponent = '';
        this.R = '';
        this.RBI = '';
        this.SB = '';
        this.userId = '';
    }
    
    buildObject(obj) {
        this.id = obj.id;
        this.double = obj.double;
        this.triple = obj.triple;
        this.AB = obj.AB;
        this.BB = obj.BB;
        this.CS = obj.CS;
        this.date = obj.date;
        this.H = obj.H;
        this.HR = obj.HR;
        this.K = obj.K;
        this.opponent = obj.opponent;
        this.R = obj.R;
        this.RBI = obj.RBI;
        this.SB = obj.SB;
        this.userId = obj.userId;
    }

    getAverage(): string {
        let avg: number = parseInt(this.H) / parseInt(this.AB);
        if (avg === 1) {
            return "1.000"
        } 
        return avg.toFixed(3).substring(1,5);
    }
}