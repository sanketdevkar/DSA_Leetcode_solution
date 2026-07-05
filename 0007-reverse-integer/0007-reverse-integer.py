class Solution:
    def reverse(self, x: int) -> int:
        MIN_INT=-2**31
        MAX_INT=2**31-1
        res=0
        sign =-1 if x<0 else 1 
        x=abs(x)
        reversed_x=int(str(x)[::-1])*sign

        if reversed_x <MIN_INT or reversed_x >MAX_INT:
            return 0
        return reversed_x
    


        