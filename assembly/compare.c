#include<stdio.h>

int main()
{
  int left;
  int right;
  printf("left: ");
  scanf("%d", &left);
  printf("right: ");
  scanf("%d", &right);
  if (left > right) {
    printf("Left is larger\n");
  } else if (left < right) {
    printf("Right is larger\n");
  } else {
    printf("Left and Right are equal\n");
  }

}

