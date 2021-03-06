PGDMP     0    6    
            w            FullStackDB    12.1    12.1 5    L           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            M           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            N           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            O           1262    16490    FullStackDB    DATABASE     �   CREATE DATABASE "FullStackDB" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Spanish_Spain.1252' LC_CTYPE = 'Spanish_Spain.1252';
    DROP DATABASE "FullStackDB";
                postgres    false            �            1259    16491    command    TABLE     s   CREATE TABLE public.command (
    id integer NOT NULL,
    "table" bigint NOT NULL,
    user_id bigint NOT NULL
);
    DROP TABLE public.command;
       public         heap    postgres    false            �            1259    16494    command_id_seq    SEQUENCE     �   CREATE SEQUENCE public.command_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.command_id_seq;
       public          postgres    false    202            P           0    0    command_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.command_id_seq OWNED BY public.command.id;
          public          postgres    false    203            �            1259    16496    custom_products    TABLE     �   CREATE TABLE public.custom_products (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    description character varying(500),
    price double precision NOT NULL,
    imgurl character varying(500),
    command_id bigint NOT NULL
);
 #   DROP TABLE public.custom_products;
       public         heap    postgres    false            �            1259    16502    custom_products_id_seq    SEQUENCE     �   CREATE SEQUENCE public.custom_products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.custom_products_id_seq;
       public          postgres    false    204            Q           0    0    custom_products_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.custom_products_id_seq OWNED BY public.custom_products.id;
          public          postgres    false    205            �            1259    16504    ingredient_custom    TABLE     v   CREATE TABLE public.ingredient_custom (
    ingredient_id integer NOT NULL,
    custom_product_id integer NOT NULL
);
 %   DROP TABLE public.ingredient_custom;
       public         heap    postgres    false            �            1259    16507    ingredients    TABLE     �   CREATE TABLE public.ingredients (
    price double precision NOT NULL,
    name character varying(50) NOT NULL,
    id integer NOT NULL,
    description character varying(500),
    imgurl character varying(500)
);
    DROP TABLE public.ingredients;
       public         heap    postgres    false            �            1259    16513    ingredients_id_seq    SEQUENCE     �   CREATE SEQUENCE public.ingredients_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.ingredients_id_seq;
       public          postgres    false    207            R           0    0    ingredients_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.ingredients_id_seq OWNED BY public.ingredients.id;
          public          postgres    false    208            �            1259    16515    products    TABLE     �   CREATE TABLE public.products (
    id integer NOT NULL,
    name character varying NOT NULL,
    description character varying,
    price double precision NOT NULL,
    imgurl character varying
);
    DROP TABLE public.products;
       public         heap    postgres    false            �            1259    16521    products_id_seq    SEQUENCE     �   CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.products_id_seq;
       public          postgres    false    209            S           0    0    products_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;
          public          postgres    false    210            �            1259    16523    rel_ids    TABLE     e   CREATE TABLE public.rel_ids (
    product_id integer NOT NULL,
    ingredient_id integer NOT NULL
);
    DROP TABLE public.rel_ids;
       public         heap    postgres    false            �            1259    16526    users    TABLE     �   CREATE TABLE public.users (
    id integer NOT NULL,
    user_name character varying(50) NOT NULL,
    user_password character varying(500) NOT NULL,
    category bigint,
    user_email character varying NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16532    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    212            T           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    213            �
           2604    16534 
   command id    DEFAULT     h   ALTER TABLE ONLY public.command ALTER COLUMN id SET DEFAULT nextval('public.command_id_seq'::regclass);
 9   ALTER TABLE public.command ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    203    202            �
           2604    16535    custom_products id    DEFAULT     x   ALTER TABLE ONLY public.custom_products ALTER COLUMN id SET DEFAULT nextval('public.custom_products_id_seq'::regclass);
 A   ALTER TABLE public.custom_products ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    205    204            �
           2604    16536    ingredients id    DEFAULT     p   ALTER TABLE ONLY public.ingredients ALTER COLUMN id SET DEFAULT nextval('public.ingredients_id_seq'::regclass);
 =   ALTER TABLE public.ingredients ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    208    207            �
           2604    16537    products id    DEFAULT     j   ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);
 :   ALTER TABLE public.products ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209            �
           2604    16538    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    213    212            >          0    16491    command 
   TABLE DATA           7   COPY public.command (id, "table", user_id) FROM stdin;
    public          postgres    false    202   m=       @          0    16496    custom_products 
   TABLE DATA           [   COPY public.custom_products (id, name, description, price, imgurl, command_id) FROM stdin;
    public          postgres    false    204   �=       B          0    16504    ingredient_custom 
   TABLE DATA           M   COPY public.ingredient_custom (ingredient_id, custom_product_id) FROM stdin;
    public          postgres    false    206   �=       C          0    16507    ingredients 
   TABLE DATA           K   COPY public.ingredients (price, name, id, description, imgurl) FROM stdin;
    public          postgres    false    207   �=       E          0    16515    products 
   TABLE DATA           H   COPY public.products (id, name, description, price, imgurl) FROM stdin;
    public          postgres    false    209   �>       G          0    16523    rel_ids 
   TABLE DATA           <   COPY public.rel_ids (product_id, ingredient_id) FROM stdin;
    public          postgres    false    211   >?       H          0    16526    users 
   TABLE DATA           S   COPY public.users (id, user_name, user_password, category, user_email) FROM stdin;
    public          postgres    false    212   e?       U           0    0    command_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.command_id_seq', 1, false);
          public          postgres    false    203            V           0    0    custom_products_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.custom_products_id_seq', 1, false);
          public          postgres    false    205            W           0    0    ingredients_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.ingredients_id_seq', 24, true);
          public          postgres    false    208            X           0    0    products_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.products_id_seq', 13, true);
          public          postgres    false    210            Y           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 66, true);
          public          postgres    false    213            �
           2606    16540    rel_ids bill_product_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public.rel_ids
    ADD CONSTRAINT bill_product_pkey PRIMARY KEY (product_id, ingredient_id);
 C   ALTER TABLE ONLY public.rel_ids DROP CONSTRAINT bill_product_pkey;
       public            postgres    false    211    211            �
           2606    16542    command command_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.command
    ADD CONSTRAINT command_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.command DROP CONSTRAINT command_pkey;
       public            postgres    false    202            �
           2606    16544 $   custom_products custom_products_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.custom_products
    ADD CONSTRAINT custom_products_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.custom_products DROP CONSTRAINT custom_products_pkey;
       public            postgres    false    204            �
           2606    16546 $   ingredient_custom cutom_product_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.ingredient_custom
    ADD CONSTRAINT cutom_product_pkey PRIMARY KEY (ingredient_id, custom_product_id);
 N   ALTER TABLE ONLY public.ingredient_custom DROP CONSTRAINT cutom_product_pkey;
       public            postgres    false    206    206            �
           2606    16548    ingredients ingredients_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.ingredients
    ADD CONSTRAINT ingredients_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.ingredients DROP CONSTRAINT ingredients_pkey;
       public            postgres    false    207            �
           2606    16550    products products_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public            postgres    false    209            �
           2606    16552    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    212            �
           2606    16554    users users_user_email_key 
   CONSTRAINT     [   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_user_email_key UNIQUE (user_email);
 D   ALTER TABLE ONLY public.users DROP CONSTRAINT users_user_email_key;
       public            postgres    false    212            �
           2606    16556    users users_user_name_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_user_name_key UNIQUE (user_name);
 C   ALTER TABLE ONLY public.users DROP CONSTRAINT users_user_name_key;
       public            postgres    false    212            �
           2606    16557    custom_products command_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.custom_products
    ADD CONSTRAINT command_id FOREIGN KEY (command_id) REFERENCES public.command(id) ON UPDATE CASCADE ON DELETE RESTRICT NOT VALID;
 D   ALTER TABLE ONLY public.custom_products DROP CONSTRAINT command_id;
       public          postgres    false    202    2729    204            �
           2606    16562 :   ingredient_custom ingredient_custom_custom_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.ingredient_custom
    ADD CONSTRAINT ingredient_custom_custom_product_id_fkey FOREIGN KEY (custom_product_id) REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 d   ALTER TABLE ONLY public.ingredient_custom DROP CONSTRAINT ingredient_custom_custom_product_id_fkey;
       public          postgres    false    206    2737    209            �
           2606    16567 6   ingredient_custom ingredient_custom_ingredient_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.ingredient_custom
    ADD CONSTRAINT ingredient_custom_ingredient_id_fkey FOREIGN KEY (ingredient_id) REFERENCES public.ingredients(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 `   ALTER TABLE ONLY public.ingredient_custom DROP CONSTRAINT ingredient_custom_ingredient_id_fkey;
       public          postgres    false    206    2735    207            �
           2606    16572 "   rel_ids rel_ids_ingredient_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.rel_ids
    ADD CONSTRAINT rel_ids_ingredient_id_fkey FOREIGN KEY (ingredient_id) REFERENCES public.ingredients(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 L   ALTER TABLE ONLY public.rel_ids DROP CONSTRAINT rel_ids_ingredient_id_fkey;
       public          postgres    false    2735    211    207            �
           2606    16577    rel_ids rel_ids_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.rel_ids
    ADD CONSTRAINT rel_ids_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 I   ALTER TABLE ONLY public.rel_ids DROP CONSTRAINT rel_ids_product_id_fkey;
       public          postgres    false    211    209    2737            �
           2606    16582    command user_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.command
    ADD CONSTRAINT user_id FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 9   ALTER TABLE ONLY public.command DROP CONSTRAINT user_id;
       public          postgres    false    212    202    2741            >      x������ � �      @      x������ � �      B      x������ � �      C   �   x����N�0����%W�8n�*��*��&�7���M+p��9��J�hv�|�T�j��#�PB��0弤�g����?��Yd�p����T��������sRá`"����j�m�df���֙�l�H7xI��cRK��ؼ�x7N���{]w�~}�KŮ�O*��Wh�qE^Ak�ȑq��Z���@��e�O=J!�FU�	      E   �   x���M� �׏S�~���ʋ�R�nn��F�^���7���9�Oz��!�VN�aNh/�����Fm��e[��1f6dG�qI�?�r�.@H)�����
JM������Q(&��6< z������ߩ��3%�� !��      G      x�3�4�2�4�2�1z\\\ P      H   �   x�5�Kk�@����;\{W\&^F�Q)�K6���I�H����I px����4��!Q�DU���h�/$KPŤY����/�~�]Mߑ}�M��������)Red��J�,�(�7̎|pGUw�.����[�D��p�9(�),�]��oθ�����	z�	���P����)A\���}��&3�I�2�ǵ�0o�������ƛ[�}����w�ZFWI��KQ3     