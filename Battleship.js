let userLayout = ['100','101','102','103','104','105','106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118', '119', '120', '121', '122', '123', '124', '125', '126', '127', '128', '129', '130', '131', '132', '133', '134', '135', '136', '137', '138', '139', '140', '141', '142', '143', '144', '145', '146', '147', '148', '149', '150', '151', '152', '153', '154', '155', '156', '157', '158', '159', '160', '161', '162', '163', '164', '165', '166', '167', '168' , '169', '170', '171', '172', '173', '174', '175', '176', '177', '178', '179', '180', '181', '182', '183', '184', '185', '186', '187', '188', '189', '190', '191', '192', '193', '194', '195', '196', '197', '198', '199'];
let enemyLayout = ['0','1','2','3','4','5','6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67','68','69', '70', '71', '72', '73', '74', '75', '76', '77','78','79', '80', '81', '82', '83', '84', '85', '86', '87','88','89', '90', '91', '92', '93', '94', '95', '96', '97','98','99'];
let verticalPlacement = ['0','10','20','30','40','50','60','70','80','90','9','19','29','39','49','59','69','79','89','99','100','110','120','130','140','150','160','170','180','190','109','119','129','139','149','159','169','179','189','199']
let patrolBoat = [];
let submarine = [];
let destroyer =[];
let battleship = [];
let aircraftCarrier = [];
let uPatrolBoat = [];
let uSubmarine = [];
let uDestroyer =[];
let uBattleship = [];
let uAircraftCarrier = [];
let enemyShips = [];
let allEnemyShips = [];
let userShips = [];
let allUserShips = [];
let enemyShipsLeft = 5;
let userShipsLeft = 5;
let num = 100;
let successUp = false
let successDown = false
let successLeft = false
let successRight = false
patrolBoat.push(createEnemyLayout(2));
submarine.push(createEnemyLayout(3));
destroyer.push(createEnemyLayout(3));
battleship.push(createEnemyLayout(4));
aircraftCarrier.push(createEnemyLayout(5))
patrolBoat = patrolBoat.flat()
submarine = submarine.flat()
destroyer = destroyer.flat()
battleship = battleship.flat()
aircraftCarrier = aircraftCarrier.flat()
uPatrolBoat.push(createUserLayout(2,false));
uSubmarine.push(createUserLayout(3,false));
uDestroyer.push(createUserLayout(3, true));
uBattleship.push(createUserLayout(4,false));
uAircraftCarrier.push(createUserLayout(5,false))
uPatrolBoat = uPatrolBoat.flat()
uSubmarine = uSubmarine.flat()
uDestroyer = uDestroyer.flat()
uBattleship = uBattleship.flat()
uAircraftCarrier = uAircraftCarrier.flat()
console.log(enemyShips)
console.log(userShips);
alert("Welcome to Battleship. Both your ships and the computer's ships have been randomly placed. If you do not like your setup just refresh the page. Click on the grid under enemy's fleet to attack. Winner is determined by who destroys all the other's ships first");



function createEnemyLayout(shipSize){
    let placement = Math.floor(Math.random() * 100)
    let secondPlace = Math.floor(Math.random() * 2)
    let ship = [];
    let change = false
    let i = 0;
    let idNum = enemyLayout[placement];
    while(enemyLayout.includes(idNum) && i<shipSize){
        if (allEnemyShips.includes(idNum)){
            placement = Math.floor(Math.random() * 100)
            idNum = enemyLayout[placement];
            i = 0
            change = false
            ship.splice(0,ship.length)
        } else if(verticalPlacement.includes(idNum)){
            if(ship.length > 1){
                placement = Math.floor(Math.random() * 100)
                idNum = enemyLayout[placement];
                i = -1
                change = false
                ship.splice(0,ship.length)
            }
            else if(enemyLayout.includes((parseInt(idNum) + (10)).toString()) && !ship.includes((parseInt(idNum) + (10)).toString())){
                idNum = (parseInt(idNum) + 10).toString();
                ship.push(idNum)
            } else if(enemyLayout.includes((parseInt(idNum) - (i*10)).toString())){
                if(change){
                    idNum = (parseInt(idNum) - 10).toString()
                    ship.push(idNum)
                } else{
                    change =true
                    idNum = (parseInt(idNum) - i*10).toString()
                    ship.push(idNum)
                }
            }
            i++
        } else if(secondPlace == 0){
            if(enemyLayout.includes((parseInt(idNum) + (10)).toString()) && !ship.includes((parseInt(idNum) + (10)).toString())){
                idNum = (parseInt(idNum) + 10).toString();
                ship.push(idNum)
            } else if(enemyLayout.includes((parseInt(idNum) - (i*10)).toString())){
                if(change){
                    idNum = (parseInt(idNum) - 10).toString()
                    ship.push(idNum)
                } else{
                    change =true
                    idNum = (parseInt(idNum) - i*10).toString()
                    ship.push(idNum)
                }
            }
            i++
        } else if(secondPlace == 1){
            if(enemyLayout.includes((parseInt(idNum) + (1)).toString()) && !ship.includes((parseInt(idNum) + (1)).toString())){
                idNum = (parseInt(idNum) + 1).toString();
                ship.push(idNum)
            } else if(enemyLayout.includes((parseInt(idNum) - ((i*1))).toString())){
                if(change){
                    idNum = (parseInt(idNum) - 1).toString()
                    ship.push(idNum)
                } else{
                    change =true
                    idNum = (parseInt(idNum) - i*1).toString()
                    ship.push(idNum)
                }
            }
            i++
        }
        if (allEnemyShips.includes(idNum)){
            placement = Math.floor(Math.random() * 100)
            idNum = enemyLayout[placement];
            i = 0
            change = false
            ship.splice(0,ship.length)
        }
    }
    if(ship.length != 0){
        enemyShips.push(ship);
    }
    for(let i = 0; i < ship.length; i++){
        allEnemyShips.push(ship[i]);
    }
    return ship

}


function createUserLayout(shipSize, destroy){
    let placement = Math.floor(Math.random() * 100)
    let secondPlace = Math.floor(Math.random() * 2)
    let ship = [];
    let color = ''
    let i = 0;
    let change = false;
    let idNum = userLayout[placement];
    while(userLayout.includes(idNum) && i<shipSize){
        if (allUserShips.includes(idNum)){
            placement = Math.floor(Math.random() * 100)
            idNum = userLayout[placement];
            i = 0
            change = false
            ship.splice(0,ship.length)
        } else if(verticalPlacement.includes(idNum)){
            if(ship.length > 1){
                placement = Math.floor(Math.random() * 100)
                idNum = userLayout[placement];
                i = -1
                change = false
                ship.splice(0,ship.length)
            }
            else if(userLayout.includes((parseInt(idNum) + (10)).toString()) && !ship.includes((parseInt(idNum) + (10)).toString())){
                idNum = (parseInt(idNum) + 10).toString();
                ship.push(idNum)
            } else if(userLayout.includes((parseInt(idNum) - (i*10)).toString())){
                if(change){
                    idNum = (parseInt(idNum) - 10).toString()
                    ship.push(idNum)
                } else{
                    change =true
                    idNum = (parseInt(idNum) - i*10).toString()
                    ship.push(idNum)
                }
            }
            i++
        } else if(secondPlace == 0){
            if(userLayout.includes((parseInt(idNum) + (10)).toString()) && !ship.includes((parseInt(idNum) + (10)).toString())){
                idNum = (parseInt(idNum) + 10).toString();
                ship.push(idNum)
            } else if(userLayout.includes((parseInt(idNum) - (i*10)).toString())){
                if(change){
                    idNum = (parseInt(idNum) - 10).toString()
                    ship.push(idNum)
                } else{
                    change = true
                    idNum = (parseInt(idNum) - i*10).toString()
                    ship.push(idNum)
                }
            }
            i++
        } else if(secondPlace == 1){
            if(userLayout.includes((parseInt(idNum) + (1)).toString()) && !ship.includes((parseInt(idNum) + (1)).toString())){
                idNum = (parseInt(idNum) + 1).toString();
                ship.push(idNum)
            } else if(userLayout.includes((parseInt(idNum) - ((i*1))).toString())){
                if(change){
                    idNum = (parseInt(idNum) - 1).toString()
                    ship.push(idNum)
                } else{
                    idNum = (parseInt(idNum) - i*1).toString()
                    ship.push(idNum)
                    change = true
                }
            }
            i++
        }
        if (allUserShips.includes(idNum)){
            placement = Math.floor(Math.random() * 100)
            idNum = userLayout[placement];
            i = 0
            change = false
            ship.splice(0,ship.length)
        }
    }
    if(ship.length != 0){
        userShips.push(ship);
    }
    if(shipSize == 2){
        color = 'gray'
    } else if(shipSize == 3 && destroy == false){
        color = 'darkGray'
    } else if(destroy == true){
        color = 'steelBlue'
    } else if(shipSize == 4){
        color = 'seaGreen'
    } else if (shipSize == 5){
        color = 'slateGray'
    }
    for(let i = 0; i < ship.length; i++){
        document.getElementById(ship[i]).style.backgroundColor = color;
        allUserShips.push(ship[i]);
    }
    return ship

}


function Shoot(block) {
    if(enemyLayout.includes(block)){
        enemyLayout.splice(enemyLayout.indexOf(block), 1);
        if(allEnemyShips.includes(block)){
            let index = allEnemyShips.indexOf(block)
            document.getElementById(block).style.backgroundColor = 'red';
            document.getElementById('describerID').innerText = 'Hit';
            if(index < 2){
                index = patrolBoat.indexOf(block)
                patrolBoat.splice(index, 1)
                if(patrolBoat.length == 0){
                    removeShip(enemyShips[0])
                    enemyShipsLeft--;
                }
            } else if(index < 5){
                index = submarine.indexOf(block)
                submarine.splice(index, 1)
                if(submarine.length == 0){
                    removeShip(enemyShips[1])
                    enemyShipsLeft--;
                }
            } else if(index < 8){
                index = destroyer.indexOf(block)
                destroyer.splice(index, 1) 
                if(destroyer.length == 0){
                    removeShip(enemyShips[2])
                    enemyShipsLeft--;
                }
            } else if(index < 12){
                index = battleship.indexOf(block)
                battleship.splice(index, 1) 
                if(battleship.length == 0){
                    removeShip(enemyShips[3])
                    enemyShipsLeft--;
                }
            } else if(index < 17){
                index = aircraftCarrier.indexOf(block)
                aircraftCarrier.splice(index, 1) 
                if(aircraftCarrier.length == 0){
                    removeShip(enemyShips[4])
                    enemyShipsLeft--;
                }
            }if (enemyShipsLeft == 0){
                alert("Congratulations! You won! If you want to play again, refresh the page.")
            } else{
                counter();
            }
        } else {
            document.getElementById(block).style.backgroundColor = 'black';
            document.getElementById('describerID').innerText = 'Miss';
            counter()
        }
    } else {
        console.log('You already did that spot');
    }
}

function counter(){
    let placement = Math.floor(Math.random() * num)
    let attack = userLayout[placement];
    let success = '';
    console.log(attack)
    userLayout.splice(userLayout.indexOf(attack), 1);
    if(allUserShips.includes(attack)){
        document.getElementById(attack).style.backgroundColor = 'red';
        let index = allUserShips.indexOf(attack)
        if(index < 2){
            index = uPatrolBoat.indexOf(attack)
            uPatrolBoat.splice(index, 1)
            if(uPatrolBoat.length == 0){
                removeShip(userShips[0])
                userShipsLeft--;
            }
        } else if(index < 5){
            index = uSubmarine.indexOf(attack)
            uSubmarine.splice(index, 1)
            if(uSubmarine.length == 0){
                removeShip(userShips[1])
                userShipsLeft--;
            }
        } else if(index < 8){
            index = uDestroyer.indexOf(attack)
            uDestroyer.splice(index, 1) 
            if(uDestroyer.length == 0){
                removeShip(userShips[2])
                userShipsLeft--;
            }
        } else if(index < 12){
            index = uBattleship.indexOf(attack)
            uBattleship.splice(index, 1) 
            if(uBattleship.length == 0){
                removeShip(userShips[3])
                userShipsLeft--;
            }
        } else if(index < 17){
            index = uAircraftCarrier.indexOf(attack)
            uAircraftCarrier.splice(index, 1) 
            if(uAircraftCarrier.length == 0){
                removeShip(userShips[4])
                userShipsLeft--;
            }
        }if (userShipsLeft == 0){
            alert("You Lost. If you would like to play again, refresh the page.")
        }
    } else {
        document.getElementById(attack).style.backgroundColor = 'black';
    }
    num--;
}

function removeShip(value){
    for(let i = 0; i < value.length; i++){
        document.getElementById(value[i]).style.backgroundColor = 'darkRed';
    }
}