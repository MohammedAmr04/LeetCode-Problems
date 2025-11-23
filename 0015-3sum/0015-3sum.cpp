#include <iostream>
#include <vector>
#include <unordered_set>
#include <cmath>
#include <bits/stdc++.h>

using namespace std;
class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        vector<vector<int>> ans;
        set<vector<int>>s;
        sort(nums.begin(), nums.end());
        for (int i = 0; i < nums.size()-2; i++) {
            int j = i+1, k = nums.size()-1;
                while (j<k) {
                    if (nums[i]+nums[j]+nums[k] ==0) {
                        if ( s.find({nums[i], nums[j], nums[k]}) == s.end()) {
                            s.insert({nums[i], nums[j], nums[k]});
                            ans.push_back({nums[i], nums[j], nums[k]});

                        }
                        j++;
                        k--;

                }else if (nums[i]+nums[j]+nums[k]>0) {
                    k--;
                }else {
                    j++;
                }
            }
        }
        return ans;
    }
};