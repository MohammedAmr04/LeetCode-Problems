#include <iostream>
#include <vector>
#include <unordered_set>
#include <cmath>
#include <bits/stdc++.h>

using namespace std;
struct info{
    int index ;
    int freq ;

};
class Solution {
public:
    int firstUniqChar(string s) {
        unordered_map<char,info> v;
        for (int i = 0; i < s.size(); i++) {
            char c = s[i];
            if (v.find(c) == v.end()) {
                v[c]={i,1};

            }else {
                v[c].freq++;
            }
        }

        for (int i = 0; i < s.size(); i++) {
        if(v[s[i]].freq==1) {
            return i;
        }
        }
        return -1;
    }
};