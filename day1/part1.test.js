import {calibrationFinder} from './part1.js'
import "babel-jest";
import "jest";

test(`Two string numbers`, () =>{
    expect(calibrationFinder("six8threepvlxttc85two")).toBe(62)
});

test(`Two integers`, () =>{
    expect(calibrationFinder("3gksfourqf48")).toBe(38)
});

test(`no numbers`, () =>{
    expect(calibrationFinder("psvxjhscstjfkbpxhbbbzvdjbcdxqrqzqlzp")).toBe(0)
});

test(`one number`, () =>{
    expect(calibrationFinder("5z")).toBe(55)
});

test(`the number one`, () =>{
    expect(calibrationFinder("one")).toBe(11)
});
