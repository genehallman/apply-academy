#include <stdio.h>

int main() {
  char str[] = "apply";

  printf("%s\n", str);
  printf("%p\n", str);
  printf("%c\n", *str);
  printf("%d\n", *str);
  printf("%s\n", &str[2]);
  printf("%p\n", &str[3]);

  str[4] = 'e';

  printf("%s\n", str);
}
