# di_lete

trynna make a vim extension that lets you select inside and around html tags

like if you're working with this code

```
<div>
  hi
</div>
```

and your cursor is on the 'h' or 'i', then you can type 'did' and it will delete inside the div leaving you with 

```
<div></div>
```

or you could do 'dad' to delete around the div to leave nothing. ideally i could add vid, vad, cid, cad to select the text or delete and leave you in insert mode, etc.
